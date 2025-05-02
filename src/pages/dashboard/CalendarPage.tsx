
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/auth";
import { useToast } from "@/components/ui/use-toast";

// Mock data for appointments
const mockAppointments = [
  {
    id: "1",
    title: "Initial Consultation",
    date: new Date(2025, 4, 5, 10, 0),
    with: "John Smith",
    status: "confirmed",
  },
  {
    id: "2",
    title: "Case Review",
    date: new Date(2025, 4, 8, 14, 30),
    with: "Sarah Johnson",
    status: "pending",
  },
  {
    id: "3",
    title: "Document Review",
    date: new Date(2025, 4, 12, 11, 0),
    with: "Michael Brown",
    status: "confirmed",
  },
];

const availableTimes = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const CalendarPage = () => {
  const { userRole } = useAuth();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showRequestForm, setShowRequestForm] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      time: "",
    },
  });

  const isClient = userRole?.toLowerCase() === "client";

  // Filter appointments for the selected date
  const appointmentsForSelectedDate = mockAppointments.filter(
    (appointment) =>
      date &&
      appointment.date.getDate() === date.getDate() &&
      appointment.date.getMonth() === date.getMonth() &&
      appointment.date.getFullYear() === date.getFullYear()
  );

  const handleSubmit = form.handleSubmit((values) => {
    // In a real app, we would submit to the API here
    console.log("Submitted appointment request:", { ...values, date });
    
    toast({
      title: "Appointment requested",
      description: `Your appointment request for ${format(date!, "PPP")} at ${values.time} has been submitted.`,
    });
    
    form.reset();
    setShowRequestForm(false);
  });

  const handleConfirmAppointment = (id: string) => {
    // In a real app, we would update the status in the database
    console.log("Confirming appointment:", id);
    
    toast({
      title: "Appointment confirmed",
      description: "The appointment has been confirmed successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Calendar</h1>
      
      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border pointer-events-auto"
                />
              </CardContent>
            </Card>
            
            <Card className="col-span-1 md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Appointments</CardTitle>
                  <CardDescription>
                    {date ? format(date, "MMMM d, yyyy") : "No date selected"}
                  </CardDescription>
                </div>
                {isClient && !showRequestForm && (
                  <Button onClick={() => setShowRequestForm(true)}>
                    Request Appointment
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {showRequestForm ? (
                  <Form {...form}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Purpose of Appointment</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Initial Consultation" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details</FormLabel>
                            <FormControl>
                              <Input placeholder="Brief description of what you'd like to discuss" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {availableTimes.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowRequestForm(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Submit Request</Button>
                      </div>
                    </form>
                  </Form>
                ) : appointmentsForSelectedDate.length > 0 ? (
                  <div className="space-y-4">
                    {appointmentsForSelectedDate.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 border rounded-md"
                      >
                        <div className="space-y-1">
                          <div className="font-medium">{appointment.title}</div>
                          <div className="text-sm text-muted-foreground">
                            With: {appointment.with}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            {format(appointment.date, "h:mm a")}
                          </div>
                        </div>
                        <div>
                          {appointment.status === "pending" && !isClient ? (
                            <Button
                              size="sm"
                              onClick={() => handleConfirmAppointment(appointment.id)}
                            >
                              Confirm
                            </Button>
                          ) : (
                            <div className={`text-sm ${
                              appointment.status === "confirmed"
                                ? "text-green-600"
                                : "text-amber-600"
                            }`}>
                              {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-muted-foreground">
                    No appointments scheduled for this date.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
              <CardDescription>
                View and manage all your scheduled appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 border rounded-md"
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{appointment.title}</div>
                      <div className="text-sm text-muted-foreground">
                        With: {appointment.with}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        {format(appointment.date, "PPP")}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {format(appointment.date, "h:mm a")}
                      </div>
                    </div>
                    <div>
                      {appointment.status === "pending" && !isClient ? (
                        <Button
                          size="sm"
                          onClick={() => handleConfirmAppointment(appointment.id)}
                        >
                          Confirm
                        </Button>
                      ) : (
                        <div className={`text-sm ${
                          appointment.status === "confirmed"
                            ? "text-green-600"
                            : "text-amber-600"
                        }`}>
                          {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CalendarPage;
