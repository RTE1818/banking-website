import { card } from '../assets';
import styles, {layout} from '../styles';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Choose a better card<br className="sm:block hidden"/> in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our card offers a competitive 15% APR, several cash-back bonuses, and industry leading customer support.
        </p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="credit card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
)

export default CardDeal