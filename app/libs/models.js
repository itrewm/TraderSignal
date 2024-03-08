import mongoose from "mongoose"
import { MdOutlineCurrencyExchange } from "react-icons/md";

const signalSchema = new mongoose.Schema({
        asset:{
            type:String,
            required:true,
            
        },
        entry:{
            type:String,
            required:true,
            
        },
        tp:{
            type:String,
            required:true,
            
        },
        sl:{
            type:String,
            required:true,
            
        },
        buy_or_sell:{
            type:Boolean,
            required:true,
            
        }
    },
    {timestamps: true}
)


const packageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    price:{
        type:String,
        required:true,
        
    },

    signals_per_week:{
        type:String,
        required:true,
        
    },
    
    signals_per_month:{
        type:String,
        required:true,
    },

    subscribe_day:{
        type:Number,
        required:true,
        
    },
    detail:{
        type:String,
        required:true,
        
    }
},
{timestamps: true}
)


const userSchema = new mongoose.Schema({
    telegramId: {
      type: String,
      required: true,
      unique: true, // Ensure unique Telegram IDs
    },
    username: {
      type: String,
      trim: true, // Trim whitespace
      maxlength: 50, // Set a reasonable username length limit
    },
    firstName: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    packages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Package', // Reference the Package model
    }],
    payments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment', // Reference the Payment model
    }],
    // Consider adding additional fields based on your requirements,
    // such as email, phone number, or other user information
  });
  

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Ensure a valid user associated with the payment
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true, // Ensure a valid package associated with the payment
    },
    amount: {
        type: Number,
        required: true,
        min: 0.01, // Enforce minimum payment amount
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['Zarrinpal', 'ٔNowPayment'], // Support various payment methods
    },
    transactionId: {
        type: String,
        unique: true, // Ensure unique transaction IDs for external references
        minlength: 10, // Enforce a minimum length for transaction IDs
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'successful', 'failed', 'canceled'], // Track payment status
    },
    metadata: {
        type: Object, // Store additional payment-specific details
    },
    createdAt: {
        type: Date,
        default: Date.now, // Track payment creation time
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Track payment update time
    },
});

  

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Payment = mongoose.models.User || mongoose.model('Payment', paymentSchema);
export const Signal = mongoose.models.Signal || mongoose.model('Signal', signalSchema);
export const Package = mongoose.models.Package || mongoose.model('Package', packageSchema);