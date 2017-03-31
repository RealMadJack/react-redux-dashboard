import * as Enums from './enums'

/**
 * Функция возвращает функцию генератор, которая при каждом вызови возвращает инкрементированное значение.
 * Начальное число, с которого начинается отсчет, и шаг задается при создании генератора.
 * Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
 * Генераторов можно создать сколько угодно.
 */
export const sequence = (start, step) => {
  start = start || 0;
  step = step || 1;

  console.log('initialStart ' + start)
  console.log('initialStep ' + step)
  return () => {
    return `start: ${start += step}`
  }
}

window.sequence1 = new sequence()
window.sequence2 = new sequence()

/**
 * Функция возвращает сумму элементов массива с чётными/нечётными индексами.
 * Если even не указан то данная функция возвращает сумму всех элементов.
 */
export const sum = (array, even) => {
  array = array || []
  even = even || false

  if (!even) {
    return array.reduce(function(a, b) {
      if (b % 2 !== 0) {
        let result = a + b
        console.log(result)
        return result
      } else {
        return null
      }
    }, 0)
  } else if (even) {
    return array.reduce(function(a, b) {
      if (b % 2 === 0) {
        let result = a + b
        console.log(result)
        return result
      } else {
        return null
      }
    }, 0)
  }
}

/**
 * Функция проверяет, есть ли в массиве группы элементов, каждый из которого на 1 больше предыдущего
 * Пример:
 *  Дан массив вида [9, 8, 1, 2, 3, 4, 5, 9, 8, 4, 5, 6, 7, 9]
 *  Результатом выполнения данной функции будет массив из двух групп [ [1, 2, 3, 4, 5], [4, 5, 6, 7] ]
 */
export var getGroups = (array) => {

}

/**
 * Если all равен true то данная функция делает заглавной первую букву каждого слова строки
 * в противном случае только первую букву строки. По умолчанию all равен false
 */
export var toUpper = (text, all) => {
  text = text || 'шла саша по шоссе'
  all = all || false

  if (all === false) {
    let newStr;

    newStr = text[0].toUpperCase() + text.slice(1)

    console.log(newStr)
    return newStr;
  } else if (all === true) {
    console.log(text.match( /\w+/g ))
  }

}

/**
 * Функция проверяет валидность url адресов.
 * В качестве входящего аргумента может быть строка или массив из несколько url адресов
 * Если есть не валидные адреса то данная функция вызывает исключение (Exception) с перечислением этих адресов
 * Доменные зоны для проверки берем из Enums.domain_zone
 */
export var checkUrl = (url) => {

}
