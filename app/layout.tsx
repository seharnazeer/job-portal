import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { AppWrapper } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });
import "@stream-io/video-react-sdk/dist/css/styles.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
         
    
    <html lang="en">
      <body className={`${inter.className}`}>
        
      <ClerkProvider appearance={{
        layout:{
          logoImageUrl:'/assets/icons/logo.png',
        }
      }}>
            <AppWrapper >
      
        {children}
        
      
        </AppWrapper >
        </ClerkProvider>
        </body>
    </html>
    
  );
}
