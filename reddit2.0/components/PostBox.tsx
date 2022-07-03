import { LinkIcon, PhotographIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar';
import {useForm} from 'react-hook-form'
type FormData={
    postTitle:string
    postBody:string
    postImage:string
    subreddit:string
}
function PostBox(){

    const {data: session}=useSession();
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm<FormData>()
    const[imageBoxOpen,setImageBoxOpen]=useState(false)
    const onSubmit=handleSubmit(async (formData)=>{
        console.log(formData)
    })
    return (
        <form onSubmit={onSubmit} className='sticky top-16 z-50  rounded-md  border-gray-300 bg-white  '>
            <div className='flex item-center space-x-3'>
                <Avatar  />
                <input
                {...register('postTitle',{required:true})}
                 disabled={!session} 
                 className="flex-1 rounded-md  bg-gray-50 p-2 pl-5 outline-none"
                 type="text" 
                 placeholder={session?"Create a post by entering a title":"sign in to post"}/>

                <PhotographIcon className={`h-6 text-gray-300 cursor-pointer ${imageBoxOpen && 'text-blue-300'}`}
                    onClick={()=>{setImageBoxOpen(!imageBoxOpen)}}
                />
                <LinkIcon className={`h-6 text-gray-300 cursor-pointer`}/>
            </div>
            {/* when we type then only value shows */}
            {!!watch('postTitle')&&(
                <div className='flex flex-col py-2'>
                    {/* body */}
                    <div className='flex items-center px-2'>
                        <p className='min-w-{90px}'>Body</p>
                        <input 
                            type="text" 
                            {...register('postBody')}
                            placeholder='Text'
                            className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                        />
                    </div>
                    <div className='flex items-center px-2'>
                    <p className='min-w-{90px}'>Subreddit</p>
                        <input 
                            type="text" 
                            {...register('subreddit',{required:true})}
                            placeholder='Text'
                            className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                        />
                    </div>
                    {imageBoxOpen && (
                         <div className='flex items-center px-2'>
                         <p className='min-w-{90px}'>Image URL:</p>
                             <input 
                                 type="text" 
                                 {...register('postImage')}
                                 placeholder='Text'
                                 className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                             />
                         </div>
                    )}
                    {/* error */}
                    {Object.keys(errors).length>0&&(
                        <div className='space-y-2 p-2 text-red-500'>
                            {errors.postTitle?.type==='required'&&(
                                <p>A Post Title is Required</p>
                            )}

                            {errors.subreddit?.type==='required'&&(
                                <p>A Subreddit is Required</p>
                            )}
                        </div>
                    )}
                    {!!watch('postTitle')&&(
                        <button 
                            type="submit"
                            className='w-full h-10 rounded-full bg-blue-400 p2 text-white'
                            // onClick={onSubmit}
                        >
                            CreatePost
                        </button>
                    )}

                </div>

            )}
        </form>
    )
}
export default PostBox