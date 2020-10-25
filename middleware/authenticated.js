export default function ({
  store,
  redirect
}) {
  // If the user is not authenticated,在特定页面中验证是否登录
  if (!store.state.authenticated) {
    // return redirect('/login')
    return redirect('/')
  }
}
