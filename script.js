// Функція для відображення товарів вибраної категорії
function showProducts(category) {
    var productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Очищення списку товарів

    // Замість цього блоку коду потрібно підключити до бази даних, отримати список товарів з вибраною категорією
    var products = getProductsByCategory(category);

    // Додавання товарів до списку
    for (var i = 0; i < products.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = products[i].name;
        li.onclick = function () {
            showProductDetails(this.innerHTML);
        };
        productList.appendChild(li);
    }

    // Очищення інформації про товар
    document.getElementById("product-details").innerHTML = "";
}

// Функція для відображення інформації про обраний товар
function showProductDetails(productName) {
    var productDetails = document.getElementById("product-details");

    // Замість цього блоку коду потрібно підключити до бази даних, отримати інформацію про товар за назвою
    var product = getProductByName(productName);

    // Відображення інформації про товар
    productDetails.innerHTML =
        "<h3>" + product.name + "</h3><p>" + product.description + "</p>";
}

// Функція для купівлі товару
function buyProduct() {
    // Замість цього блоку коду потрібно реалізувати логіку купівлі товару, наприклад, відправити запит на сервер
    alert("Товар куплено!");

    // Повернення до вихідного стану програми
    var productList = document.getElementById("product-list");
    productList.innerHTML = "";
    document.getElementById("product-details").innerHTML = "";
}

// Приклади функцій отримання списку товарів за категорією та отримання інформації про товар за назвою
function getProductsByCategory(category) {
    // Замість цього блоку коду потрібно підключити до бази даних та отримати список товарів з вибраною категорією
    if (category === "electronics") {
        return [
            { name: "Смартфон", description: "Дуже крутий смартфон" },
            { name: "Ноутбук", description: "Можливо, найдорожчий ноутбук на світі" },
        ];
    } else if (category === "clothing") {
        return [
            { name: "Футболка", description: "Класна футболка" },
            { name: "Джинси", description: "Стильні джинси" },
        ];
    } else if (category === "books") {
        return [
            { name: "Роман", description: "Цікавий роман" },
            { name: "Детектив", description: "Напружений детектив" },
        ];
    }
}

function getProductByName(productName) {
    // Замість цього блоку коду потрібно підключити до бази даних та отримати інформацію про товар за назвою
    if (productName === "Смартфон") {
        return { name: "Смартфон", description: "Дуже крутий смартфон" };
    } else if (productName === "Ноутбук") {
        return {
            name: "Ноутбук",
            description: "Можливо, найдорожчий ноутбук на світі",
        };
    } else if (productName === "Футболка") {
        return { name: "Футболка", description: "Класна футболка" };
    } else if (productName === "Джинси") {
        return { name: "Джинси", description: "Стильні джинси" };
    } else if (productName === "Роман") {
        return { name: "Роман", description: "Цікавий роман" };
    } else if (productName === "Детектив") {
        return { name: "Детектив", description: "Напружений детектив" };
    }
}

let elements = document.querySelectorAll("li");
for (let i = 0; i < elements.length; i++) {
    /*прокручиваем в цикле все элементы*/
    elements[i].addEventListener("click", function () {
        /*при клике на элемент
         */
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");

            /*удаляем у всех class active*/
        }
        this.classList.add(
            "active"
        ); /*добавляем class active по которому кликнули */
    });
}
