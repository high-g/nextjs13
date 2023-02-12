const hello = ({ item }) => {
  console.log(item)
  return (
    <div>
      <h1>{item}</h1>
    </div>
  )
}

export default hello

export const getServerSideProps = async () => {
  console.log('hello next.js')

  return {
    props: {
      item: 'hello world',
    },
  }
}
