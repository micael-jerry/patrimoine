"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InputForm = () => {
  const [startDate, setStartDate] = useState<string>("2024-07-01");
  const [endDate, setEndDate] = useState<string>("2024-07-16");

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full h-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Patrimoine</div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Crésus" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="crésus">Crésus</SelectItem>
            {/* Ajouter plus d'options ici si nécessaire */}
          </SelectContent>
        </Select>
      </div>

      {/* Checkboxes */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="flex items-center">
          <Checkbox className="mr-2" defaultChecked />
          Agrégat
        </label>
        <label className="flex items-center">
          <Checkbox className="mr-2" defaultChecked />
          Trésorerie
        </label>
        <label className="flex items-center">
          <Checkbox className="mr-2" defaultChecked />
          Immobilisations
        </label>
        <label className="flex items-center">
          <Checkbox className="mr-2" />
          Obligations
        </label>
      </div>

      {/* Date inputs */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">De</label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">À</label>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Button */}
      <Button className="w-full bg-blue-500">Entrées</Button>
    </div>
  );
};

export default InputForm;
