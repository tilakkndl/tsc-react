import React, { ReactElement } from "react";
import { ReactNode } from "react";
import "./App.css";
function Title({ title }: { title: string }) {
  return <div>{title}</div>;
}

function HeadingContent({ children }: { children: string }) {
  return <div>{children}</div>;
}
function ComponentChild({ children }: { children: ReactNode }): ReactElement {
  return <div>{children}</div>;
}

//default props
const defaultPropTypes = {
  heading: <strong>Heading</strong>,
};
type containerPropos = { children: ReactNode } & typeof defaultPropTypes;
function Container({ heading, children }: containerPropos): ReactElement {
  return (
    <>
      <div>
        <h1>{heading}</h1>
        {children}
      </div>
    </>
  );
}

Container.defaultProps = defaultPropTypes;

//functional props
function TextWithNumber({
  children,
  header,
}: {
  header: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, setState] = React.useState<number>(1);

  return (
    <div>
      <h2>{header?.(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  );
}

//Generics
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Title title="hello" />
      <HeadingContent>HI</HeadingContent>
      <ComponentChild>
        <strong>woring?</strong>
      </ComponentChild>
      <Container>Foo</Container>
      <TextWithNumber header={(num: number) => <span>header {num}</span>}>
        {(num: number) => <div>Today's number is ${num}</div>}
      </TextWithNumber>
      <List
        items={["Tila", "jandel", "santosh"]}
        render={(item: string) => <div>{item}</div>}
      />
    </div>
  );
}

export default App;
