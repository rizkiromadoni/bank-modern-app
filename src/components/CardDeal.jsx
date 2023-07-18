import { card } from "../assets"
import style, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et autem quis libero error aliquam veniam iure delectus harum accusamus quibusdam in, impedit unde quo laborum mollitia molestiae adipisci aspernatur!</p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal