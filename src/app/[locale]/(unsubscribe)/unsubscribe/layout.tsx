function Layout(props: LayoutProps<'/[locale]/unsubscribe'>) {
  const { children } = props

  return <div className='flex min-h-dvh min-w-full items-center justify-center p-4'>{children}</div>
}

export default Layout
