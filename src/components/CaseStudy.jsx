import { useState } from 'react'

     const CaseStudy = ({ study, isEditable, onUpdate }) => {
       const [isEditing, setIsEditing] = useState(false)
       const [formData, setFormData] = useState(study)

       const handleSave = () => {
         onUpdate(formData)
         setIsEditing(false)
       }

       return (
         <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
           {isEditing && isEditable ? (
             <div className="space-y-4">
               <input
                 type="text"
                 value={formData.title}
                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                 className="w-full p-2 border rounded"
                 placeholder="Project Title"
               />
               <textarea
                 value={formData.overview}
                 onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                 className="w-full p-2 border rounded"
                 placeholder="Project Overview"
               />
               <input
                 type="text"
                 value={formData.media}
                 onChange={(e) => setFormData({ ...formData, media: e.target.value })}
                 className="w-full p-2 border rounded"
                 placeholder="Media URLs (comma-separated)"
               />
               <textarea
                 value={formData.timeline}
                 onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                 className="w-full p-2 border rounded"
                 placeholder="Timeline"
               />
               <input
                 type="text"
                 value={formData.tools}
                 onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                 className="w-full p-2 border rounded"
                 placeholder="Tools/Technologies"
               />
               <textarea
                 value={formData.outcomes}
                 onChange={(e) => setFormData({ ...formData, outcomes: e.target.value })}
                 className="w-full p-2 border rounded"
                 placeholder="Outcomes"
               />
               <button
                 onClick={handleSave}
                 className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
               >
                 Save
               </button>
               <button
                 onClick={() => setIsEditing(false)}
                 className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
               >
                 Cancel
               </button>
             </div>
           ) : (
             <div>
               <h3 className="text-xl font-bold">{study.title}</h3>
               <p className="mt-2">{study.overview}</p>
               <div className="mt-4">
                 {study.media.split(',').map((url, i) => (
                   url.trim() && (
                     <img
                       key={i}
                       src={url.trim()}
                       alt="Project media"
                       className="object-cover w-full h-48 mb-2 rounded"
                       onError={(e) => (e.target.style.display = 'none')}
                     />
                   )
                 ))}
               </div>
               <p className="mt-2"><strong>Timeline:</strong> {study.timeline}</p>
               <p className="mt-2"><strong>Tools:</strong> {study.tools}</p>
               <p className="mt-2"><strong>Outcomes:</strong> {study.outcomes}</p>
               {isEditable && (
                 <button
                   onClick={() => setIsEditing(true)}
                   className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                 >
                   Edit
                 </button>
               )}
             </div>
           )}
         </div>
       )
     }

     export default CaseStudy