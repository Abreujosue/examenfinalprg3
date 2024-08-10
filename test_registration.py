from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import unittest

class RegistrationTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_register(self):
        driver = self.driver
        driver.get("URL_DE_TU_PAGINA")  # Reemplaza con la URL de tu aplicación

        # Encuentra los campos de texto y el botón de registro
        name_field = driver.find_element(By.NAME, "name")
        email_field = driver.find_element(By.NAME, "email")
        password_field = driver.find_element(By.NAME, "password")
        register_button = driver.find_element(By.ID, "register")

        # Ingresa los datos de prueba
        name_field.send_keys("Test User")
        email_field.send_keys("testuser@example.com")
        password_field.send_keys("password123")

        # Envía el formulario
        register_button.click()

        # Espera para que la página cargue y verifica el resultado
        time.sleep(5)
        success_message = driver.find_element(By.ID, "success-message")

        self.assertEqual(success_message.text, "Registro exitoso")

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
