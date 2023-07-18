import { clients } from "../constants"
import style from "../style"

const Clients = () => {
  return (
    <section className={`${style.flexCenter} my-4`}>
      <div className={`${style.flexCenter} flex-wrap w-full gap-3`}>
        {
          clients.map((client) => (
            <div key={client.id} className={`flex-1 ${style.flexCenter} sm:min-w-[192px]`}>
              <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Clients