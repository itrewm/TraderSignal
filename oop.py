
import requests

# ساختن تراکنش و گرفتن آدرس ولت 

headers = {
    'x-api-key': 'EJFKH7P-EWBMKV5-NRY8T9D-T7AGXBY',
    'Content-Type': 'application/json'
}

data = {
    "price_amount": 20,
    "price_currency": "usd",
    "pay_currency": "trx",
    "ipn_callback_url": "https://nowpayments.io",
    "order_id": "test",
    "order_description": "for buy sth"
}

response = requests.post('https://api.nowpayments.io/v1/payment', headers=headers, json=data)

result = response.json()
print(result)
pay_address = result['pay_address']
payment_id = result['payment_id']
pay_amount = result['pay_amount']
"""اطلاعات باید ذخیره شود"""

"""payment"""
"""chat_id | pay_address | payment_id | pay_amount | pay_status => 0,1 | created_at"""

# چک کردن پرداخت
response = requests.get(f'https://api.nowpayments.io/v1/payment/{payment_id}', headers=headers)
print("--------------------------")
print(response.text)


#Bot
payments = db.get_unpaid_payment() #بین 0 هاست
for payment in payments:
    response = requests.get(f'https://api.nowpayments.io/v1/payment/{payment['payment_id']}', headers=headers)
    if response['payment_status'] == 'confirmed':
        db.set_status(user_id, 1)
        client.send_message(user_id, text="پرداخت با موفقیت تایید شد")