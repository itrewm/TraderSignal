
class Enemy:
    def __init__(self, name, last_name) -> None:
        self.name = name
        self.last_name = last_name
        self.health = 100


enemy1 = Enemy("Ali", "mojaver")
enemy2 = Enemy("Ali2", "mojaver2")

print(enemy1.name)
print(enemy1.last_name)

app = Cleint("token")