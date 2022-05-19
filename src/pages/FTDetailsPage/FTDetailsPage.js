import DrinksList from "../../components/DrinksList/DrinksList";
import EntreeList from "../../components/EntreeList/EntreeList";
import AppetizerList from "../../components/AppetizerList/AppetizerList";

export default function FTDetailsPage({ foodTrucks }) {
    return (
        <div>
            <h1>This is the Food Truck Details Page</h1>
            <DrinksList foodTrucks={foodTrucks}/>
            <EntreeList foodTrucks={foodTrucks}/>
            <AppetizerList foodTrucks={foodTrucks}/>
        </div>
    );
};