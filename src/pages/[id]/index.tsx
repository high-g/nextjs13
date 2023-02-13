import React from 'react'
import { GetServerSideProps } from 'next'

type NewsItem = {
  id: string
  title: string
  content: string
}

type Props = {
  news: NewsItem
}

const Page: React.FC<Props> = ({ news }) => {
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryId = typeof context.query.id === 'string' ? context.query.id : ''

  const dummyList = [
    {
      id: '0',
      title: 'test0',
      content: 'texttext0',
    },
    {
      id: '1',
      title: 'test1',
      content: 'texttext1',
    },
    {
      id: '2',
      title: 'test2',
      content: 'texttext2',
    },
  ]

  return {
    props: {
      news: dummyList[+queryId] || {},
    },
  }
}

export default Page
