import { useState } from "react";
import Title from '../ui/Title'
import Input from './../form/Input';

function Category() {
    const [inputText, setInputText] = useState("");
    const [categories, setCategories] = useState(["pizza"]);

    return (
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title addClass="text-[40px]">Category</Title>
            <div className="mt-5">
                <div className="flex gap-4 flex-1 items-center">
                    <Input
                        placeholder="Add a new Category..."
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                if (inputText) {
                                    setCategories([...categories, inputText]);
                                    setInputText("");
                                }
                            }
                        }}
                    />
                    <button
                        className="btn-primary"
                        onClick={() => {
                            if (inputText) {
                                setCategories([...categories, inputText]);
                                setInputText("");
                            }
                        }}
                    >
                        Add
                    </button>
                </div>
                <div className="mt-10">
                    {categories.map((category, index) => (
                        <div className="flex justify-between mt-4" key={index}>
                            <b className="text-xl">{category}</b>
                            <button
                                className="btn-primary !bg-danger hover:!bg-dangerDark"
                                onClick={() =>
                                    setCategories(categories.filter((cat) => cat !== category))
                                }
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category