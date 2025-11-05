import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Icon } from './icons.js';
import { editImageWithGemini } from '../services/geminiService.js';

const ImageEditor = () => {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [editedImage, setEditedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
                setError('Unsupported file type. Please upload a PNG, JPEG, or WEBP image.');
                setImageFile(null);
                setImagePreview(null);
                setEditedImage(null);
                return;
            }
            setError(null);
            setEditedImage(null);
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (!imageFile || !prompt || !imagePreview) {
            setError('Please select an image and enter a prompt.');
            return;
        }
        setIsLoading(true);
        setEditedImage(null);
        setError(null);
        try {
            const base64Data = imagePreview.split(',')[1];
            const resultBase64 = await editImageWithGemini(base64Data, imageFile.type, prompt);
            if (resultBase64) {
                setEditedImage(`data:${imageFile.type};base64,${resultBase64}`);
            } else {
                throw new Error('The AI model did not return an image. Please try a different prompt.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    const clearImage = () => {
        setImageFile(null);
        setImagePreview(null);
        setEditedImage(null);
        setError(null);
        setPrompt('');
    };

    return (
        jsxs("section", { id: "image-editor", className: "mb-12 bg-white dark:bg-dark-card p-6 rounded-[20px] shadow-lg scroll-mt-20", children: [
            jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                jsx(Icon, { name: "Image", className: "w-8 h-8 text-primary" }),
                jsx("h2", { className: "text-2xl font-bold", children: "AI Image Editor" })
            ] }),
            jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Upload an image and tell our AI assistant how to edit it. Please use PNG, JPEG, or WEBP formats." }),
            !imagePreview && (
                 jsxs("label", { htmlFor: "image-upload", className: "flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors", children: [
                    jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                        jsx(Icon, { name: "UploadCloud", className: "w-10 h-10 mb-3 text-gray-400" }),
                        jsxs("p", { className: "mb-2 text-sm text-gray-500 dark:text-gray-400", children: [jsx("span", { className: "font-semibold", children: "Click to upload" }), " or drag and drop"] }),
                        jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "PNG, JPG or WEBP" })
                    ] }),
                    jsx("input", { id: "image-upload", type: "file", className: "hidden", accept: "image/png, image/jpeg, image/webp", onChange: handleFileChange })
                ] })
            ),
            imagePreview && (
                jsxs("div", { className: "space-y-6", children: [
                    jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                        jsxs("div", { children: [
                            jsx("h3", { className: "text-lg font-semibold mb-2 text-center", children: "Original" }),
                            jsx("img", { src: imagePreview, alt: "Original upload", className: "rounded-lg shadow-md w-full h-auto object-contain max-h-96" })
                        ] }),
                        jsxs("div", { children: [
                            jsx("h3", { className: "text-lg font-semibold mb-2 text-center", children: "Edited" }),
                             jsxs("div", { className: "relative w-full h-full min-h-[24rem] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center", children: [
                                isLoading && (
                                    jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-lg", children: [
                                        jsx(Icon, { name: "Loader", className: "w-12 h-12 text-white animate-spin" }),
                                        jsx("p", { className: "text-white mt-2", children: "Editing your image..." })
                                    ] })
                                ),
                                editedImage ? (
                                    jsx("img", { src: editedImage, alt: "AI Edited", className: "rounded-lg w-full h-auto object-contain max-h-96" })
                                ) : (
                                    !isLoading && jsx(Icon, { name: "Image", size: 64, className: "text-gray-400" })
                                )
                            ] })
                        ] })
                    ] }),
                    
                    jsxs("div", { className: "relative", children: [
                        jsx("input", {
                        type: "text",
                        value: prompt,
                        onChange: (e) => setPrompt(e.target.value),
                        placeholder: "e.g., add a party hat on the cat",
                        className: "w-full px-4 py-3 pl-10 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary",
                        disabled: isLoading
                        }),
                        jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: 
                            jsx(Icon, { name: "Edit3", className: "w-5 h-5 text-gray-400" })
                        })
                    ] }),

                    jsxs("div", { className: "flex items-center justify-center gap-4", children: [
                        jsxs("button", {
                            onClick: clearImage,
                            className: "px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-[20px] hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",
                            disabled: isLoading,
                            children: [
                                jsx(Icon, { name: "Trash2", className: "inline w-4 h-4 mr-2" }),
                                "Clear Image"
                            ]
                        }),
                        jsxs("button", {
                            onClick: handleSubmit,
                            disabled: isLoading || !prompt,
                            className: "px-6 py-2 bg-primary text-white rounded-[20px] hover:brightness-95 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center",
                            children: [
                                isLoading ? (
                                    jsxs(React.Fragment, { children: [
                                        jsx(Icon, { name: "Loader", className: "w-5 h-5 animate-spin mr-2" }),
                                        "Generating..."
                                    ] })
                                ) : (
                                    jsxs(React.Fragment, { children: [
                                        jsx(Icon, { name: "Star", className: "inline w-4 h-4 mr-2" }),
                                        "Generate Edit"
                                    ] })
                                )
                            ]
                        })
                    ] })
                ] })
            ),
            
            error && (
                jsx("div", { className: "mt-4 p-4 bg-red-100 dark:bg-red-900/50 border border-red-400 text-red-700 dark:text-red-300 rounded-lg text-center", children: 
                    jsx("p", { children: error })
                })
            )
        ] })
    );
};

export default ImageEditor;
