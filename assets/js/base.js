export function validatePassword(rule, value, callback) {
  const lengthValid = value.length >= 8 && value.length <= 20;
  const patterns = [
    /[A-Z]/, // 大写字母
    /[a-z]/, // 小写字母
    /\d/, // 数字
    /\W/, // 特殊字符
  ];
  const matchCount = patterns.reduce(
    (count, pattern) => count + pattern.test(value),
    0
  );
  if (lengthValid && matchCount >= 3) {
    callback();
  } else {
    callback(
      new Error(
        "密码必须包含大写字母、小写字母、数字、特殊符号里的3种格式,长度8-20位"
      )
    );
  }
};

export function fetchTranslation(t, tm, path) {
  const translation = t(path);

  // 检查翻译内容的类型
  if (translation === path) {
    const messageObject = tm(path);
    // 检查messageObject是否是数组
    if (Array.isArray(messageObject)) {
      return messageObject.map((_, index) => {
        const newPath = `${path}[${index}]`;
        return fetchTranslation(t, tm, newPath);
      });
    } else {
      const result = {};
      for (const key in messageObject) {
        const newPath = `${path}.${key}`;
        Object.assign(result, { [key]: fetchTranslation(t, tm, newPath) });
      }
      return result;
    }
  } else {
    // 否则，直接返回
    return translation;
  }
}
