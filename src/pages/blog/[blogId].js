import BlogDetailsBanner from '@/components/blogDetails/BlogDetailsBanner'
import SingleBlog from '@/components/blogDetails/SingleBlog'
import Head from 'next/head'
import { blogs } from '@/data/blog';
import Layout from '@/layout/Layout';

const BlogDetails = ({singleBlogData}) => {

  return (
    <Layout>
      <Head>
        <title>Techvers | Blog Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogDetailsBanner/>
      <SingleBlog data={singleBlogData}/>
    </Layout>
  )
}

export default BlogDetails

export const getStaticPaths = async () => {
  const paths = blogs.map((blog) => {
    return {
      params: {
        blogId: blog.id
      }
    }
  })

  return {paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
  const data = blogs.find(({id}) => id === params.blogId);

  return{
    props: {
      singleBlogData: data
    }
  }
}