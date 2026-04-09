type Props = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: Props) {
  return (
    <>
      <h2 className="text-center mt-3">Blogs Layout</h2>
      {children}
    </>
  );
}