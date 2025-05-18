import RecipeItem from "./components/recipeItem/recipeItem";
import Header from "./components/header/Header";
import User from "./components/user/User";
import {useGetRecipesQuery} from "./store/api/recipe.api";
import CreateRecipe from "./components/create-recipe/CreateRecipe";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {IRecipe} from "./types/recipe.type";

function App() {
    const {user} = useTypedSelector(state => state.user)
    const {isLoading, data} = useGetRecipesQuery(undefined, {
        skip: user?.id !== 1
    })
  return (
    <>
        <User />
        <CreateRecipe />
        <Header />
        <main>
        {isLoading ? <h1>Loading...</h1> : data ? data.map((recipe: IRecipe) => <RecipeItem key={recipe.id}  recipe={recipe}/>) : <h1>Not found</h1>}
        </main>
    </>
  )
}

export default App
