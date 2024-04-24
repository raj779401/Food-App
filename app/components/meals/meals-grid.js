import classes from './meals-grid.module.css';
import MealItem from './meals-item';
export default function MealsGrid({meals}){
    // console.log(meals); // Add this line for debugging
    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))}
        </ul>
    );
}
