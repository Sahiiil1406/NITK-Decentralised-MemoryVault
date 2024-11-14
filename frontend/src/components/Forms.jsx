import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Label } from '../components/ui/Label';
import { Textarea } from '../components/ui/TextArea';
import { Tag, X } from 'lucide-react';

const MemoryForm = () => {
  const [formData, setFormData] = useState({
    ipfsHash: '',
    memoryType: '',
    tags: [''],
    title: '',
    description: '',
    timestamp: ''
  });

  const [currentTag, setCurrentTag] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addTag = () => {
    if (currentTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Add New Memory</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            {/* <Label htmlFor="ipfsHash">IPFS Hash</Label> */}
            {/* <Input
              id="ipfsHash"
              name="ipfsHash"
              value={formData.ipfsHash}
              onChange={handleInputChange}
              placeholder="Enter IPFS hash"
              className="w-full"
            /> */}
          </div>

          <div className="space-y-2">
            <Label htmlFor="memoryType">Memory Type</Label>
            <Input
              id="memoryType"
              name="memoryType"
              value={formData.memoryType}
              onChange={handleInputChange}
              placeholder="Enter memory type"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag, index) => (
                tag && (
                  <div key={index} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    <Tag size={16} />
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="hover:text-blue-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} variant="outline">
                Add Tag
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter title"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              className="w-full min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timestamp">Timestamp</Label>
            <Input
              id="timestamp"
              name="timestamp"
              type="datetime-local"
              value={formData.timestamp}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Submit Memory
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MemoryForm;