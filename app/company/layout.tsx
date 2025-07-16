import DefaultLayout from "../(default)/layout";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
