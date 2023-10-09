import { FC, ReactNode } from "react";
import { Header } from "../../features/Header";
import './PageLayout.scss'

interface PageLayoutProps {
  children: ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
  return (
    <div className="PageLayout__root">
      <Header />
      <div className="PageLayout__body">
        {children}
      </div>
    </div>
  )
}