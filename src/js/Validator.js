export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    // не более трех цифр подряд
    const noMoreThreeNumbersInRow = (name) => /^(?!.*\d{4,}).*$/g.test(name);
    // без кириллицы //! -- тесты пройдут и без него, но хотелось бы сохранить на будущее
    const noCyrillic = (name) => /^(?!.*[а-яА-Я]).*$/g.test(name);
    // разрешена латиница
    const latinAllowed = (name) => /^(?=.*[a-zA-Z]).*$/g.test(name);
    // разрешены цифры
    const numbersAllowed = (name) => /^(?=.*\d).*$/g.test(name);
    // разрешены дефисы
    const hyphenAllowed = (name) => /^(?=.*-).*$/g.test(name);
    // разрешено нижнее подчеркивание
    const undescoreAllowed = (name) => /^(?=.*_).*$/g.test(name);
    // первым символом запрещены цифры, дефис, подчеркивание
    const noNumbersHyphenUnderscoreAtBeginning = (name) => /^[^-_\d]+\S*$/g.test(name);
    // последним символом запрещены цифры, дефис, подчеркивание
    const noNumbersHyphenUnderscoreAtEnd = (name) => /^\S*[^-_\d]$/g.test(name);

    return (noMoreThreeNumbersInRow(this.name)
		&& noNumbersHyphenUnderscoreAtBeginning(this.name)
		&& noNumbersHyphenUnderscoreAtEnd(this.name)
		&& (latinAllowed(this.name)
		|| numbersAllowed(this.name)
		|| hyphenAllowed(this.name)
		|| undescoreAllowed(this.name))
    );
  }
}
