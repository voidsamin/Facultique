import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TaskCard } from '@/components/tasks/TaskCard';
import { TaskDetailsModal } from '@/components/tasks/TaskDetailsModal'; // Add this import
import { useAuth } from '@/contexts/AuthContext';
import { taskApi } from '@/services/api';
import { TaskView } from '@/types/task';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const TaskList: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [tasks, setTasks] = useState<TaskView[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskView[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | string>('all');
  
  // Add modal states
  const [selectedTask, setSelectedTask] = useState<TaskView | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    filterTasks();
  }, [tasks, searchTerm, statusFilter]);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await taskApi.getTasks();
      setTasks(data);
    } catch (err: any) {
      toast({
        title: 'Error',
        description: 'Failed to fetch tasks',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const filterTasks = () => {
    let filtered = tasks;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(term) ||
          t.description.toLowerCase().includes(term)
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((t) => t.status === statusFilter);
    }

    setFilteredTasks(filtered);
  };

  const handleTaskAction = async (taskId: number, action: string) => {
    try {
      if (action === 'start') {
        await taskApi.startTask(taskId);
        toast({ title: 'Success', description: 'Task started' });
        fetchTasks();
      } else if (action === 'refresh') {
        fetchTasks();
        return;
      } else if (action === 'view') {
        // Find the task and open the modal
        const task = tasks.find(t => t.id === taskId);
        if (task) {
          setSelectedTask(task);
          setIsModalOpen(true);
        }
        return; // Don't need to refresh tasks for view action
      }
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err.message || 'Action failed',
        variant: 'destructive'
      });
    }
  };

  // Add function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const getPageTitle = () => {
    if (user?.role === 'FACULTY') return 'My Tasks';
    return 'All Tasks';
  };

  if (loading) {
    // ... your existing loading state
  }

  return (
    <>
      <div className="space-y-6">
        {/* ... your existing JSX ... */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} onAction={handleTaskAction} />
          ))}
        </div>
      </div>

      {/* Add the Task Details Modal */}
      <TaskDetailsModal
        task={selectedTask}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
