interface LogoPropTypes {
  children: React.ReactNode;
}

export default function Logo({ children }: LogoPropTypes) {
  return <h1 className="text-3xl font-bold m-auto">{children}</h1>;
}
