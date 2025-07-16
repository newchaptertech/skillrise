import DefaultLayout from "../(default)/layout";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
