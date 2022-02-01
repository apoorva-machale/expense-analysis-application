module Api
    module V1
        class TransactionsController < ApplicationController
            def index
                transactions = Transaction.all()
                render json: {status:'SUCCESS', message:'All transactions', data: transactions}, status: :ok
            end

            def create
                transaction = Transaction.new(transaction_params)
                if transaction.save
                    render json: {status: 'SUCCESS', message: 'New Transaction saved', data: transaction}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'Transaction not added', data: transaction.errors}, status: :unprocessable_entity
                end
            end

            def show
                transaction = Transaction.find(params[:id])
                render json: {status:'SUCCESS', message:'Transaction found', data: transaction}, status: :ok
            end

            private
            def transaction_params
                params.permit(:userid, :categoryid, :date, :expense)
            end
        end
    end
end
