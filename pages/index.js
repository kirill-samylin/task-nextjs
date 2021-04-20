import MyWonderfulComponent from '../src/components/MyWonderfulComponent/MyWonderfulComponent';

export default function Page(props) {
  return (
    <MyWonderfulComponent props={props} >I'm text from a component</MyWonderfulComponent>
  )
}
export async function getServerSideProps() {
  const sms = "Hello from SSR";
  console.log(sms) // output to the server
  return {
    props: {
      id: 112,
      count: 1,
      options: {
        params: {
          fields: {
            isDynamic: true,
          }
        }
      },
      color: "red",
      data: {},
      sms: sms
    }
  }
}