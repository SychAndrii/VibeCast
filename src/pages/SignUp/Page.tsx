const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <article className=" prose text-center w-[320px] prose-a:text-blue-600 prose-a:no-underline">
        <div className="avatar placeholder mb-4">
          <div className="bg-neutral text-neutral-content rounded-full w-24">
            <span className="text-3xl">VC</span>
          </div>
        </div>
        <h1 className=" mb-[25px]">VibeCast</h1>
        <h2 className=" mt-[0px]">Join today.</h2>
        <div className="divider">or</div>
        <button className="btn rounded-full w-full">Create account</button>
        <p className=" mb-[40px]">By signing up, you agree to <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, including <a href="">Cookie Use</a>.</p>
        <h3>Already have an account?</h3>
        <button className="btn btn-outline rounded-full w-full">Sign in</button>
      </article>
      <footer className="footer prose max-w-none prose-a:text-primary prose-a:no-underline p-6 absolute bottom-0 left-0 w-full flex justify-center gap-4">
        <a className="link">Advertisement</a>
        <a className="link">Press kit</a>
        <a className="link">Cookie policy</a>
      </footer>
    </div>
  )
}

export default Page