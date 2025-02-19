import Card from '@/components/card/card'
import classes from './container.module.css'

export default function Container () {
    return (
        <div className={classes.pageWrapper}>
            <h2>Search results</h2>
            <div className={classes.cardContainer}>
            <Card></Card>
            </div>
        </div>
    )
}