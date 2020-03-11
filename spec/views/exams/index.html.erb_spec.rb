require 'rails_helper'

RSpec.describe "exams/index", type: :view do
  before(:each) do
    assign(:exams, [
      Exam.create!(
        :patient => nil
      ),
      Exam.create!(
        :patient => nil
      )
    ])
  end

  it "renders a list of exams" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
