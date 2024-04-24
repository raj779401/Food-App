import MealsGrid from '../components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
export default async function MealsPage(){
   const meals =  await getMeals(); // this is just to make sure data is fetch
    return (
        <>
        <header className={classes.header}>
            <h1> Delicious meals created <span className={classes.highlight}/> by you.</h1>
            <p>Choose you favorite reciepe and cook it by yourself ,its easy and fun.</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your favorite reciepe.
                </Link>
            </p>
        </header>
        <main className={classes.main}>
<MealsGrid meals={meals}/>
        </main>
        </>
    );
}