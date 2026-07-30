

export default function({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div className="text-7xl">Header</div>
        <div>{children}</div>
        <div className="text-7xl">Footer</div>
    </div>
  );
}