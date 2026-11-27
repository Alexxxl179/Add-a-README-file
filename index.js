// 1 задача
export const getSum = (a, b) => {
  return a + b;
};

// 2 задача
export const castBoolean = (value) => {
  return Boolean(value);
};

// 3 задача
export const capitalize = (text, i) => {
  // Проверяем, что индекс в пределах строки
  if (i < 0 || i >= text.length) {
    return text;
  }
  
  // Разбиваем строку на части, меняем нужную букву и склеиваем обратно
  const before = text.slice(0, i);
  const char = text[i].toUpperCase();
  const after = text.slice(i + 1);
  
  return before + char + after;
};

// 4 задача
export const countCapitalLetters = (text) => {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    // Проверяем, что символ равен своей версии в верхнем регистре,
    // и что это вообще буква (чтобы не считать пробелы, хотя они и так не изменятся)
    if (text[i] === text[i].toUpperCase() && text[i] !== ' ') {
      count++;
    }
  }
  return count;
};