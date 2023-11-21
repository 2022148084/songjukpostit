import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        송죽민국 게시판
        <br className="max-md:hidden" />
        <span className="orange_gradient text center">Songjuk Post-it</span>
      </h1>
      <p className='desc text-center'>
        Songjuk Post-it은 메모와 태그를 작성할 수 있는 송죽민국 게시판입니다. 프로필 페이지에서 메모 수정 및 삭제 가능합니다.
      </p>
      <Feed />
    </section>
  )
}

export default Home