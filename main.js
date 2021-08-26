/* Напишите функцию delay(ms), которая возвращает новый промис, переходящий в состояние "resolved" через ms миллисекунд.
Пример использования:
delay(1000).then(() => console.log("Hello!"))
 */

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
};

delay(1000).then(() => console.log("Hello!"));

/* Необходимо организовать цепочку промисов. 
  Загрузить данные пользователя используем функцию getUserInfo.
Затем получить ссылку на аватар пользователя, для этого нужно использовать функцию getUserAvatar. Данная функция расширит и вернет обьект пользователя.
Затем получить дополнительную информацию по пользователю, для этого нужно использовать функцию getUserAdditionalInfo. Данная функция расширит и вернет обьект пользователя.
В конце вывести в консоль финальную версию полученного обьекта.
 */
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 }), 1000);
    });
}

function getUserAvatar(userInfo) {
    return new Promise(function (resolve, reject) {
        userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
        setTimeout(() => resolve(userInfo), 1000);
    });
}
function getUserAdditionalInfo(userInfo) {
    return new Promise(function (resolve, reject) {
        userInfo.interests = ['sport', 'books'];
        setTimeout(() => resolve(userInfo), 1000);
    });
}

getUserInfo()
    .then(result => getUserAvatar(result))
    .then(result => getUserAdditionalInfo(result))
    .then(result => console.log(result))

/* Необходимо добавить обработку ошибок в следующий код. Ошибка должна быть выведена в консоль.
 */

new Promise(function (resolve, reject) {
    setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 }), 3000);
})
    .then(function (userInfo) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('wrong data')), 3000);
        });
    })
    .catch(onReject => console.log(onReject))
