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
import { useForm } from "react-hook-form";
import { InputFormType } from "@/types/input.form.type";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useInputFormStore } from "@/store/input.form";

const InputForm = () => {
  const [startDate, setStartDate] = useState<string>("2024-07-01");
  const [endDate, setEndDate] = useState<string>("2024-07-16");

  const { inputForm: inputFormStore, setInputForm: setInputFormStore } =
    useInputFormStore();

  const inputForm = useForm<InputFormType>({
    defaultValues: inputFormStore,
  });

  const onInputFormSubmit = (data: InputFormType) => {
    console.log(data);
    setInputFormStore(data);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full h-full flex flex-col justify-between">
      <Form {...inputForm}>
        <form onSubmit={inputForm.handleSubmit(onInputFormSubmit)}>
          <FormField
            control={inputForm.control}
            name="patrimoine"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center mb-4">
                <FormLabel className="text-lg font-semibold">
                  Patrimoine
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Patrimoine" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Cresus">Crésus</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormField
              control={inputForm.control}
              name="agregat"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox
                      className="mr-2"
                      checked={inputForm.watch("agregat")}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  Agrégat
                </FormItem>
              )}
            />
            <FormField
              control={inputForm.control}
              name="tresorerie"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox
                      className="mr-2"
                      checked={inputForm.watch("tresorerie")}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  Trésorerie
                </FormItem>
              )}
            />
            <FormField
              control={inputForm.control}
              name="immobilisations"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox
                      className="mr-2"
                      checked={inputForm.watch("immobilisations")}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  Immobilisations
                </FormItem>
              )}
            />
            <FormField
              control={inputForm.control}
              name="obligations"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox
                      className="mr-2"
                      checked={inputForm.watch("obligations")}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  Obligations
                </FormItem>
              )}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">De</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                inputForm.setValue("debut", e.target.value);
              }}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">À</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                inputForm.setValue("debut", e.target.value);
              }}
              className="w-full"
            />
          </div>
          <Button className="w-full bg-blue-500" type="submit">
            Entrées
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
