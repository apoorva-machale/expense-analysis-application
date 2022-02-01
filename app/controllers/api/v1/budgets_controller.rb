module Api
    module V1
        class BudgetsController < ApplicationController
            def index
                budgets = Budget.all()
                render json: {status:'SUCCESS', message:'All budgets', data: budgets}, status: :ok
            end

            def create
                budget = Budget.new(budget_params)
                if budget.save
                    render json: {status: 'SUCCESS', message: 'New Budget saved', data: budget}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'Budget not added', data: budget.errors}, status: :unprocessable_entity
                end
            end

            def show
                budget = Budget.find(params[:id])
                render json: {status:'SUCCESS', message:'Budget found', data: budget}, status: :ok
            end

            private
            def budget_params
                params.permit(:userid, :categoryid, :budget_month, :budget)
            end
        end
    end
end
