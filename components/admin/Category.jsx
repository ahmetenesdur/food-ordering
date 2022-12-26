import axios from 'axios';
import { useEffect, useState } from "react";
import Title from '../ui/Title'
import Input from './../form/Input';
import { toast } from "react-toastify";

function Category() {
    const [inputText, setInputText] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/categories`
                );
                setCategories(res?.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategories();
    }, []);

    const handleCreate = async (e) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/categories`,
                { title: inputText }
            );
            setCategories([...categories, res.data]);
            setInputText("");
            toast.success("Category created successfully");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            if (confirm("Are you sure you want to delete this category?")) {
                await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
                );
                setCategories(categories.filter((cat) => cat._id !== id));
                toast.success("Category deleted successfully");
            }
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title addClass="text-[40px]">Category</Title>
            <div className="mt-5">
                <div className="flex gap-4 flex-1 items-center">
                    <Input
                        placeholder="Add a new Category..."
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                    />
                    <button className="btn-primary" onClick={handleCreate}>
                        Add
                    </button>
                </div>

                <div className="mt-10  max-h-[250px] overflow-auto pb-4">
                    {categories.map((category) => (
                        <div className="flex justify-between mt-4" key={category._id}>
                            <b className="text-xl">{category.title}</b>
                            <button
                                className="btn-primary !bg-danger hover:!bg-dangerDark"
                                onClick={(e) => handleDelete(e, category._id)}>
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