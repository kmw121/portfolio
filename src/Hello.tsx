type propsType = {
  to: string;
};

export function Hello1(props: propsType) {
  const { to } = props;
  return <div>hello {to} </div>;
}
