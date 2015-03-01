# lt-gherkin

Simple Gherkin (cucumber - http://cukes.info) language support for lighttable.

Provides command for (rigid) formatting of a feature/gherkin file that goes a little beyond the built-in auto-indent mechanism of codemirror.

## Install

via Lighttable plugin manager.

## Usage

- To format your feature file, run the "Gherkin: "
- To format feature files automatically on save, add the following user behaviour:

```
[:editor.gherkin :lt.objs.editor.file/on-save :lt.plugins.lt-gherkin/gherkin.do.format.editor]
```

## License

Copyright © 2015 ICM Consulting Pty Ltd. http://www.icm-consulting.com.au

Distributed under the Eclipse Public License, the same as Clojure.

