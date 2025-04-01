"use client";
import { useState } from "react";

export default function UploadForm() {
  const [formData, setFormData] = useState({
    title: "",
    servisekind: "",
    projectKind: "",
    Year: "",
    ClientName: "",
    ProjectDescription: "",
    aboutClient: "",
    AboutProject: "",
    ProjectCover: null,
    ProjectPageCover: null,
    image1: null,
    image2: null,
    image3: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) form.append(key, formData[key]);
    });

    try {
      const res = await fetch("/api/Project", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      console.log(data);
      alert("Project Created Successfully!");
    } catch (error) {
      console.error(error);
      alert("Error occurred!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 shadow-lg p-5 rounded-xl">
      <div className="grid grid-cols-2 gap-5">
        {/* Text Fields */}
        {["title", "servisekind", "projectKind", "Year", "ClientName"].map((name) => (
          <div key={name} className="flex flex-col gap-2">
            <label className="font-semibold text-gray-500">{name}</label>
            <input
              type="text"
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleInputChange}
              className="border rounded-md p-2 shadow-sm"
            />
          </div>
        ))}

        {/* Image Fields */}
        {["ProjectCover", "ProjectPageCover", "image1", "image2", "image3"].map((field, index) => (
          <div key={index} className="flex flex-col gap-3">
            <label className="font-semibold text-gray-500">{field}</label>
            <input
              type="file"
              name={field}
              onChange={(e) => handleFileChange(e, field)}
              className="border rounded-md p-2 shadow-sm"
            />
          </div>
        ))}

        {/* Textarea Fields */}
        {["ProjectDescription", "aboutClient", "AboutProject"].map((name) => (
          <div key={name} className="flex flex-col gap-3">
            <label className="font-semibold text-gray-500">{name}</label>
            <textarea
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleInputChange}
              className="border rounded-md p-2 shadow-sm"
            />
          </div>
        ))}
      </div>

      <button type="submit" className="bg-blue-500 text-white w-full rounded-md mt-5 p-3">
        Submit
      </button>
    </form>
  );
}
