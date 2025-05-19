import RecipeItem from "./components/recipeItem/recipeItem";
import Header from "./components/header/Header";
import User from "./components/user/User";
import {useGetRecipesQuery} from "./store/api/recipe.api";
import CreateRecipe from "./components/create-recipe/CreateRecipe";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {IRecipe} from "./types/recipe.type";
import {RecipeSearch} from "./components/Search/RecipeSearch";
import {useState} from "react";

function App() {
    const [searchInput, setSearchInput] = useState('')
    const [appliedSearch, setAppliedSearch] = useState('');
    const {user} = useTypedSelector(state => state.user)
    const {isLoading, data} = useGetRecipesQuery(appliedSearch, {
        skip: user?.id !== 1
    })
    const handleSearch = () => {
        setAppliedSearch(searchInput)
    }
  return (
    <>
        <User />
        <CreateRecipe />
        <Header />
        <RecipeSearch value={searchInput} onChange={setSearchInput} onSearch={handleSearch} />
        <main>
        {isLoading ? <h1>Loading...</h1> : data ? data.map((recipe: IRecipe) => <RecipeItem key={recipe.id}  recipe={recipe}/>) : <h1>Not found</h1>}
        </main>
    </>
  )
}

export default App
