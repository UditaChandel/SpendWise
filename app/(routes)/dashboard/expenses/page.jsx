'use client'
import React, { useState, useEffect } from 'react';
import ExpenseListTable from './_components/ExpenseListTable';
import { db } from '@/utils/db.Config';
import { Expenses, Budgets } from '@/utils/schema';
import { eq, desc } from 'drizzle-orm';
import { useUser } from "@clerk/nextjs"; 

function Expenses_() {
    const { user } = useUser(); 
    const [expensesList, setExpensesList] = useState([]);

    const getAllExpenses = async () => {
        if (!user) return; 

        try {
            const result = await db
                .select({
                    id: Expenses.id,
                    name: Expenses.name,
                    amount: Expenses.amount,
                    createdAt: Expenses.createdAt
                })
                .from(Budgets)
                .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
                .where(eq(Budgets.createdBy, user.primaryEmailAddress?.emailAddress)) 
                .orderBy(desc(Expenses.id));

            console.log("Fetched expenses:", result);
            setExpensesList(result);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

   
    useEffect(() => {
        if (user) {
            getAllExpenses();
        }
    }, [user]);

    return (
        <div className="p-10">
            <h2 className="font-bold text-3xl">My Expenses</h2>
            <ExpenseListTable expensesList={expensesList} refreshData={getAllExpenses} />
        </div>
    );
}

export default Expenses_;