import '@/app/ui/global.css'
import { inter} from "@/app/ui/fonts";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
          <meta charSet="utf-8" />
          <title>My Site</title>
      </head>

      <body className={`${inter.className} antialiased`}>
      {children}
      </body>
    </html>
  );
}
