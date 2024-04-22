import MealsGrid from '../components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';
export default function MealsPage(){
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
<MealsGrid meals={[]}/>
        </main>
        </>
    );
}