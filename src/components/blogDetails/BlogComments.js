import CommentForm from './CommentForm';
import Image from 'next/image';

const BlogComments = ({comments}) => {
  return (
    <div className="pt-8 lg:pt-16">
      <h3 className="py-2 text-primary-text font-inter text-base md:text-xl lg:text-2xl font-bold">Comment</h3>
      <ul className="divide-y divide-[#D6F0FD]">
        {
          comments.map((comment) => (
            <li key={comment.id} className='py-6'>
              <div className={`${comment?.replyComments && 'reply-arrow'} relative flex items-start gap-4 lg:gap-5`}>
                <div className="flex-shrink-0 h-10 lg:h-16 w-10 lg:w-16 rounded-full overflow-hidden">
                  <Image src={comment.authorImg} className="w-full" alt="avatar" width={56} height={56}/>
                </div>

                <div>
                  <h5 className="text-sm font-inter text-primary-text font-bold">{comment.author}</h5>
                  <span className="block pt-1 pb-2 text-xs lg:text-[13px] font-inter text-secondary-text">{comment.date}</span>
                  <p className="text-xs lg:text-sm font-inter text-primary-text leading-6">{comment.message}</p>
                  <button type="button" className="mt-4 flex items-center gap-2 p-1 text-xs lg:text-[13px] font-inter text-primary-text font-bold">
                    <Image src="/images/icons/reply.svg" alt="reply" width={18} height={18}/>
                    Reply
                  </button>
                </div>
              </div>
              {
                comment?.replyComments && (
                  <ul className="pl-6 lg:pl-20">
                    {
                      comment?.replyComments?.map((reply) => (
                        <li key={reply.id} className="py-6 last:pb-0">
                          <div className="flex items-start gap-5">
                            <div className="flex-shrink-0 h-10 lg:h-16 w-10 lg:w-16 rounded-full overflow-hidden">
                              <Image src={reply.authorImg} className="w-full" alt="avatar" width={56} height={56}/>
                            </div>

                            <div>
                              <h5 className="text-sm font-inter text-primary-text font-bold">{reply.author}</h5>
                              <span className="block pt-1 pb-2 text-[13px] font-inter text-secondary-text">{reply.date}</span>
                              <p className="text-xs lg:text-sm font-inter text-primary-text leading-6">{reply.message}</p>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </li>
          ))
        }
      </ul>

      {/* leave a comments */}
      <CommentForm/>
    </div>
  )
}

export default BlogComments